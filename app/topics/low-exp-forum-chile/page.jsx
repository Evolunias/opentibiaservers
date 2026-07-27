import LowExpForumChileKeywordPage, { generateMetadata } from './low-exp-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumChileKeywordPage />;
}
