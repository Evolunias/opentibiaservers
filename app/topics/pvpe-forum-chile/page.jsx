import PvpeForumChileKeywordPage, { generateMetadata } from './pvpe-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumChileKeywordPage />;
}
