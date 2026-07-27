import SeasonalDownloadChileKeywordPage, { generateMetadata } from './seasonal-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadChileKeywordPage />;
}
