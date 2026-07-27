import FreshStartForumChileKeywordPage, { generateMetadata } from './fresh-start-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumChileKeywordPage />;
}
