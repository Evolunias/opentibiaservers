import NewSeasonMiracleWikiKeywordPage, { generateMetadata } from './new-season-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleWikiKeywordPage />;
}
