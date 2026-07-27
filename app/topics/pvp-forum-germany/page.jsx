import PvpForumGermanyKeywordPage, { generateMetadata } from './pvp-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumGermanyKeywordPage />;
}
