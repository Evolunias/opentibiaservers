import SeasonalStatusChileKeywordPage, { generateMetadata } from './seasonal-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusChileKeywordPage />;
}
