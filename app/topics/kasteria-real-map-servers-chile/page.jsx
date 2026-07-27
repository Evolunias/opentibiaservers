import KasteriaRealMapServersChileKeywordPage, { generateMetadata } from './kasteria-real-map-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServersChileKeywordPage />;
}
