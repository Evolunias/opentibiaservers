import ThaisotSeasonalServerUkKeywordPage, { generateMetadata } from './thaisot-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSeasonalServerUkKeywordPage />;
}
