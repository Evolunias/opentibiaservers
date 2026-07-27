import PvpEnforcedForumChileKeywordPage, { generateMetadata } from './pvp-enforced-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumChileKeywordPage />;
}
