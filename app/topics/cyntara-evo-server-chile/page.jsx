import CyntaraEvoServerChileKeywordPage, { generateMetadata } from './cyntara-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEvoServerChileKeywordPage />;
}
