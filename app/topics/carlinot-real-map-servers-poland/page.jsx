import CarlinotRealMapServersPolandKeywordPage, { generateMetadata } from './carlinot-real-map-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServersPolandKeywordPage />;
}
