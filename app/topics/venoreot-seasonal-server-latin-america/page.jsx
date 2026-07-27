import VenoreotSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './venoreot-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSeasonalServerLatinAmericaKeywordPage />;
}
