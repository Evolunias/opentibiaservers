import FreshStartForumUsaKeywordPage, { generateMetadata } from './fresh-start-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumUsaKeywordPage />;
}
