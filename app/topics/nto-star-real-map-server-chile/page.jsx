import NtoStarRealMapServerChileKeywordPage, { generateMetadata } from './nto-star-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerChileKeywordPage />;
}
