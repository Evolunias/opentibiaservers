import ThaisotSeasonalServerMexicoKeywordPage, { generateMetadata } from './thaisot-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSeasonalServerMexicoKeywordPage />;
}
