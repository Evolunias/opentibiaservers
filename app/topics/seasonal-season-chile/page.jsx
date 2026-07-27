import SeasonalSeasonChileKeywordPage, { generateMetadata } from './seasonal-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonChileKeywordPage />;
}
