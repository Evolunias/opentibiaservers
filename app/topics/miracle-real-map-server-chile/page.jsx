import MiracleRealMapServerChileKeywordPage, { generateMetadata } from './miracle-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRealMapServerChileKeywordPage />;
}
