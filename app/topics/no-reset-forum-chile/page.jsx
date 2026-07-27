import NoResetForumChileKeywordPage, { generateMetadata } from './no-reset-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumChileKeywordPage />;
}
