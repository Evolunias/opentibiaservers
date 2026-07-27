import FreshStartForumGermanyKeywordPage, { generateMetadata } from './fresh-start-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumGermanyKeywordPage />;
}
