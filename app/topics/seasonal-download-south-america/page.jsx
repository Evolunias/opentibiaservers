import SeasonalDownloadSouthAmericaKeywordPage, { generateMetadata } from './seasonal-download-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadSouthAmericaKeywordPage />;
}
