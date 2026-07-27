import SabrehavenSeasonalServerEuropeKeywordPage, { generateMetadata } from './sabrehaven-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSeasonalServerEuropeKeywordPage />;
}
