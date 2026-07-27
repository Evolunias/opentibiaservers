import OriginaltibiaRealMapServerChileKeywordPage, { generateMetadata } from './originaltibia-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaRealMapServerChileKeywordPage />;
}
