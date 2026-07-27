import DuraOnlineRealMapServerChileKeywordPage, { generateMetadata } from './dura-online-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRealMapServerChileKeywordPage />;
}
