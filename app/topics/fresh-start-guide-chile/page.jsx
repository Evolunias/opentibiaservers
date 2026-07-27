import FreshStartGuideChileKeywordPage, { generateMetadata } from './fresh-start-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideChileKeywordPage />;
}
