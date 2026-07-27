import SeasonalForumChileKeywordPage, { generateMetadata } from './seasonal-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumChileKeywordPage />;
}
