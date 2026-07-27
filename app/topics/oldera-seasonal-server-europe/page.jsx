import OlderaSeasonalServerEuropeKeywordPage, { generateMetadata } from './oldera-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSeasonalServerEuropeKeywordPage />;
}
