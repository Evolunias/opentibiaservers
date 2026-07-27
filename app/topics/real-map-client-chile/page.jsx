import RealMapClientChileKeywordPage, { generateMetadata } from './real-map-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientChileKeywordPage />;
}
