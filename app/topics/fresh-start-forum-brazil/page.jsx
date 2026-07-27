import FreshStartForumBrazilKeywordPage, { generateMetadata } from './fresh-start-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumBrazilKeywordPage />;
}
