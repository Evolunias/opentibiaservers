import PvpTibiaPrivateServerChileKeywordPage, { generateMetadata } from './pvp-tibia-private-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerChileKeywordPage />;
}
