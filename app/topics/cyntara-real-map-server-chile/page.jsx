import CyntaraRealMapServerChileKeywordPage, { generateMetadata } from './cyntara-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRealMapServerChileKeywordPage />;
}
