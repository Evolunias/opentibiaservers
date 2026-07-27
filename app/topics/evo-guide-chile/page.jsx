import EvoGuideChileKeywordPage, { generateMetadata } from './evo-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuideChileKeywordPage />;
}
