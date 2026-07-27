import NewSeasonRangerSArcaniOtsKeywordPage, { generateMetadata } from './new-season-ranger-s-arcani-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRangerSArcaniOtsKeywordPage />;
}
