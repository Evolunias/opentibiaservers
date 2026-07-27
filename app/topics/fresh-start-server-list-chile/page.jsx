import FreshStartServerListChileKeywordPage, { generateMetadata } from './fresh-start-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListChileKeywordPage />;
}
