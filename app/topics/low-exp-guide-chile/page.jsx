import LowExpGuideChileKeywordPage, { generateMetadata } from './low-exp-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideChileKeywordPage />;
}
