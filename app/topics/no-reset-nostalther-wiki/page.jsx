import NoResetNostaltherWikiKeywordPage, { generateMetadata } from './no-reset-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherWikiKeywordPage />;
}
