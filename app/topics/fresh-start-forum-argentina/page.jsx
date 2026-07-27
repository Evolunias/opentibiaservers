import FreshStartForumArgentinaKeywordPage, { generateMetadata } from './fresh-start-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumArgentinaKeywordPage />;
}
