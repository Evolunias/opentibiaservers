import CarlinotCustomMapServerEuropeKeywordPage, { generateMetadata } from './carlinot-custom-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotCustomMapServerEuropeKeywordPage />;
}
