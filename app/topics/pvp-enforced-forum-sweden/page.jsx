import PvpEnforcedForumSwedenKeywordPage, { generateMetadata } from './pvp-enforced-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumSwedenKeywordPage />;
}
