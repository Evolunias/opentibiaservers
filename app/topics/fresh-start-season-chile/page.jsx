import FreshStartSeasonChileKeywordPage, { generateMetadata } from './fresh-start-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonChileKeywordPage />;
}
