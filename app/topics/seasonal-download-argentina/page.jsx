import SeasonalDownloadArgentinaKeywordPage, { generateMetadata } from './seasonal-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadArgentinaKeywordPage />;
}
