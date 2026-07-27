import SeasonalDownloadGermanyKeywordPage, { generateMetadata } from './seasonal-download-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadGermanyKeywordPage />;
}
