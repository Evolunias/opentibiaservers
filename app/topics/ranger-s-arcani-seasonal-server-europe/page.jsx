import RangerSArcaniSeasonalServerEuropeKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerEuropeKeywordPage />;
}
