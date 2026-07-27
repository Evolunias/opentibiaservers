import CarlinotSeasonalServerEuropeKeywordPage, { generateMetadata } from './carlinot-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSeasonalServerEuropeKeywordPage />;
}
