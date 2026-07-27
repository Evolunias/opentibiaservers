import SeasonalDownloadEuropeKeywordPage, { generateMetadata } from './seasonal-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadEuropeKeywordPage />;
}
