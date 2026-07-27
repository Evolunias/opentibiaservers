import VenoreotSeasonalServerUkKeywordPage, { generateMetadata } from './venoreot-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSeasonalServerUkKeywordPage />;
}
