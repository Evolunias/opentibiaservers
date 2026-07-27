import RangerSArcaniSeasonalServerCanadaKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerCanadaKeywordPage />;
}
