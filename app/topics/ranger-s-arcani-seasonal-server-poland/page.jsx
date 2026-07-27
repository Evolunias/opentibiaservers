import RangerSArcaniSeasonalServerPolandKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerPolandKeywordPage />;
}
