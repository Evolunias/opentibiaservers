import PvpEnforcedForumUkKeywordPage, { generateMetadata } from './pvp-enforced-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumUkKeywordPage />;
}
