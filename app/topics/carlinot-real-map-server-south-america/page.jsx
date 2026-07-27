import CarlinotRealMapServerSouthAmericaKeywordPage, { generateMetadata } from './carlinot-real-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServerSouthAmericaKeywordPage />;
}
