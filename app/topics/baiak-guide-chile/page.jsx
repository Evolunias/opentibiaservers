import BaiakGuideChileKeywordPage, { generateMetadata } from './baiak-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideChileKeywordPage />;
}
