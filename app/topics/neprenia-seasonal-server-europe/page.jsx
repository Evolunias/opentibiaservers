import NepreniaSeasonalServerEuropeKeywordPage, { generateMetadata } from './neprenia-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerEuropeKeywordPage />;
}
