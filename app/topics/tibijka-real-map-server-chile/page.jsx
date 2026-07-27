import TibijkaRealMapServerChileKeywordPage, { generateMetadata } from './tibijka-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRealMapServerChileKeywordPage />;
}
