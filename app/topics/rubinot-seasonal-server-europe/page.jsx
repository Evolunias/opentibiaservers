import RubinotSeasonalServerEuropeKeywordPage, { generateMetadata } from './rubinot-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonalServerEuropeKeywordPage />;
}
