import CarlinotRealMapServerEuropeKeywordPage, { generateMetadata } from './carlinot-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServerEuropeKeywordPage />;
}
