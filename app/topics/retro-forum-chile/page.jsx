import RetroForumChileKeywordPage, { generateMetadata } from './retro-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumChileKeywordPage />;
}
