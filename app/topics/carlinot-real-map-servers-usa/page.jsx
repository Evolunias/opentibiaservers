import CarlinotRealMapServersUsaKeywordPage, { generateMetadata } from './carlinot-real-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServersUsaKeywordPage />;
}
