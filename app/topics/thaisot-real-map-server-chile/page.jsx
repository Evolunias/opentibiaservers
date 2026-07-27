import ThaisotRealMapServerChileKeywordPage, { generateMetadata } from './thaisot-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRealMapServerChileKeywordPage />;
}
