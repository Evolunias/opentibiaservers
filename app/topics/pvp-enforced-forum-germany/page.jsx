import PvpEnforcedForumGermanyKeywordPage, { generateMetadata } from './pvp-enforced-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumGermanyKeywordPage />;
}
