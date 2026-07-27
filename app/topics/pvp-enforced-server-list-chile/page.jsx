import PvpEnforcedServerListChileKeywordPage, { generateMetadata } from './pvp-enforced-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListChileKeywordPage />;
}
