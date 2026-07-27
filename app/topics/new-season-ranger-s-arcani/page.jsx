import NewSeasonRangerSArcaniKeywordPage, { generateMetadata } from './new-season-ranger-s-arcani';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRangerSArcaniKeywordPage />;
}
