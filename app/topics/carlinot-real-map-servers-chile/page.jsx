import CarlinotRealMapServersChileKeywordPage, { generateMetadata } from './carlinot-real-map-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServersChileKeywordPage />;
}
