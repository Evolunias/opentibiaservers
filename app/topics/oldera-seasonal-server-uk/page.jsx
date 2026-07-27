import OlderaSeasonalServerUkKeywordPage, { generateMetadata } from './oldera-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSeasonalServerUkKeywordPage />;
}
