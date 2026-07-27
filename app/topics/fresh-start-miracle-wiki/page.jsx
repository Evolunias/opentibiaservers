import FreshStartMiracleWikiKeywordPage, { generateMetadata } from './fresh-start-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleWikiKeywordPage />;
}
