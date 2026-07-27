import PvpEnforcedForumBrazilKeywordPage, { generateMetadata } from './pvp-enforced-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumBrazilKeywordPage />;
}
