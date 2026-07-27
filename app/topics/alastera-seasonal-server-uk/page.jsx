import AlasteraSeasonalServerUkKeywordPage, { generateMetadata } from './alastera-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSeasonalServerUkKeywordPage />;
}
