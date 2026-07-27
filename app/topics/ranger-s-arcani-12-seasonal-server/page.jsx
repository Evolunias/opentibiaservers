import RangerSArcani12SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani12SeasonalServerKeywordPage />;
}
