import MediviaRealMapServersChileKeywordPage, { generateMetadata } from './medivia-real-map-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServersChileKeywordPage />;
}
