import CarlinotRealMapServerSwedenKeywordPage, { generateMetadata } from './carlinot-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServerSwedenKeywordPage />;
}
