import ThaisotSeasonalServerGermanyKeywordPage, { generateMetadata } from './thaisot-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSeasonalServerGermanyKeywordPage />;
}
