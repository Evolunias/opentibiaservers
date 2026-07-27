import AmeriaRealMapServerChileKeywordPage, { generateMetadata } from './ameria-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServerChileKeywordPage />;
}
