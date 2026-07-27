import NewSeasonNepreniaWikiKeywordPage, { generateMetadata } from './new-season-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaWikiKeywordPage />;
}
