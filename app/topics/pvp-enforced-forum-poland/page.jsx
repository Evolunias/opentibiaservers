import PvpEnforcedForumPolandKeywordPage, { generateMetadata } from './pvp-enforced-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumPolandKeywordPage />;
}
