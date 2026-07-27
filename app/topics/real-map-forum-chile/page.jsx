import RealMapForumChileKeywordPage, { generateMetadata } from './real-map-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumChileKeywordPage />;
}
