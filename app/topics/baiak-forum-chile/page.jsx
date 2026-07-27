import BaiakForumChileKeywordPage, { generateMetadata } from './baiak-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumChileKeywordPage />;
}
