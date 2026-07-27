import VenoreotSeasonalServerCanadaKeywordPage, { generateMetadata } from './venoreot-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSeasonalServerCanadaKeywordPage />;
}
