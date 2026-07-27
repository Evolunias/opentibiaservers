import NewSeasonRangerSArcaniWikiKeywordPage, { generateMetadata } from './new-season-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRangerSArcaniWikiKeywordPage />;
}
