import CustomMapForumChileKeywordPage, { generateMetadata } from './custom-map-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumChileKeywordPage />;
}
