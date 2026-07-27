import EvoForumChileKeywordPage, { generateMetadata } from './evo-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumChileKeywordPage />;
}
