import NoResetKasteriaWikiKeywordPage, { generateMetadata } from './no-reset-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaWikiKeywordPage />;
}
