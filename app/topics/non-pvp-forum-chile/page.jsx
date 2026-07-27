import NonPvpForumChileKeywordPage, { generateMetadata } from './non-pvp-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumChileKeywordPage />;
}
