import CyntaraPvpServerChileKeywordPage, { generateMetadata } from './cyntara-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpServerChileKeywordPage />;
}
