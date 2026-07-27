import BlazeraRealMapServerChileKeywordPage, { generateMetadata } from './blazera-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRealMapServerChileKeywordPage />;
}
