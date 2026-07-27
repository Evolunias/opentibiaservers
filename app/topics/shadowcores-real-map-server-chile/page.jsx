import ShadowcoresRealMapServerChileKeywordPage, { generateMetadata } from './shadowcores-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresRealMapServerChileKeywordPage />;
}
