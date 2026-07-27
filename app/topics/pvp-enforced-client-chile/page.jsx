import PvpEnforcedClientChileKeywordPage, { generateMetadata } from './pvp-enforced-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientChileKeywordPage />;
}
