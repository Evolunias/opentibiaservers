import RealMapServerListChileKeywordPage, { generateMetadata } from './real-map-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListChileKeywordPage />;
}
