import SeasonalDownloadPolandKeywordPage, { generateMetadata } from './seasonal-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadPolandKeywordPage />;
}
