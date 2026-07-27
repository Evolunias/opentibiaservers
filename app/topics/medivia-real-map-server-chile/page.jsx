import MediviaRealMapServerChileKeywordPage, { generateMetadata } from './medivia-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerChileKeywordPage />;
}
