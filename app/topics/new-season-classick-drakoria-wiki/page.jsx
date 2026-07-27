import NewSeasonClassickDrakoriaWikiKeywordPage, { generateMetadata } from './new-season-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassickDrakoriaWikiKeywordPage />;
}
