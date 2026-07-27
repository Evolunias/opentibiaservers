import CustomMapGuideChileKeywordPage, { generateMetadata } from './custom-map-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuideChileKeywordPage />;
}
