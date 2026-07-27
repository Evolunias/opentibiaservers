import BlazeraSeasonalServerEuropeKeywordPage, { generateMetadata } from './blazera-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSeasonalServerEuropeKeywordPage />;
}
