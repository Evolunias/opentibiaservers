import FreshStartClientChileKeywordPage, { generateMetadata } from './fresh-start-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClientChileKeywordPage />;
}
