import TibiascapeRealMapServerChileKeywordPage, { generateMetadata } from './tibiascape-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapServerChileKeywordPage />;
}
