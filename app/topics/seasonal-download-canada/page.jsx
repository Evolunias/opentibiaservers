import SeasonalDownloadCanadaKeywordPage, { generateMetadata } from './seasonal-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadCanadaKeywordPage />;
}
