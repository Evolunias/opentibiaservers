import HighExpGuideChileKeywordPage, { generateMetadata } from './high-exp-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideChileKeywordPage />;
}
