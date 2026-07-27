import PvpForumSwedenKeywordPage, { generateMetadata } from './pvp-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumSwedenKeywordPage />;
}
