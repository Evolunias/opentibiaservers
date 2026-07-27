import FreshStartForumSwedenKeywordPage, { generateMetadata } from './fresh-start-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumSwedenKeywordPage />;
}
