import RangerSArcaniSeasonKeywordPage, { generateMetadata } from './ranger-s-arcani-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonKeywordPage />;
}
