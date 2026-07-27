import HighExpForumChileKeywordPage, { generateMetadata } from './high-exp-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumChileKeywordPage />;
}
