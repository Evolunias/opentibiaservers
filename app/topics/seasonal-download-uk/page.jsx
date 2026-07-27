import SeasonalDownloadUkKeywordPage, { generateMetadata } from './seasonal-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadUkKeywordPage />;
}
