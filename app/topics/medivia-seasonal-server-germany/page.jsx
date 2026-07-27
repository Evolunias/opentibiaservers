import MediviaSeasonalServerGermanyKeywordPage, { generateMetadata } from './medivia-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaSeasonalServerGermanyKeywordPage />;
}
