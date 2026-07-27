import NoResetUnlineWikiKeywordPage, { generateMetadata } from './no-reset-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineWikiKeywordPage />;
}
