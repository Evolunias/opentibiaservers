import ActiveNostaltherWikiKeywordPage, { generateMetadata } from './active-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherWikiKeywordPage />;
}
