import OlderaPvpServerChileKeywordPage, { generateMetadata } from './oldera-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpServerChileKeywordPage />;
}
