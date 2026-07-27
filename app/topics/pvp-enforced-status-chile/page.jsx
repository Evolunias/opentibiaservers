import PvpEnforcedStatusChileKeywordPage, { generateMetadata } from './pvp-enforced-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusChileKeywordPage />;
}
