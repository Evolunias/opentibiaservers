import SeasonalGuideChileKeywordPage, { generateMetadata } from './seasonal-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideChileKeywordPage />;
}
