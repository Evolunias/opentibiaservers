import NewSeasonOriginaltibiaWikiKeywordPage, { generateMetadata } from './new-season-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOriginaltibiaWikiKeywordPage />;
}
