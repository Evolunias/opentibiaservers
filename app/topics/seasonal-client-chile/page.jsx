import SeasonalClientChileKeywordPage, { generateMetadata } from './seasonal-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientChileKeywordPage />;
}
