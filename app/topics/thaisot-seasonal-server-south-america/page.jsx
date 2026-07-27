import ThaisotSeasonalServerSouthAmericaKeywordPage, { generateMetadata } from './thaisot-seasonal-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSeasonalServerSouthAmericaKeywordPage />;
}
