import SeasonalDownloadBrazilKeywordPage, { generateMetadata } from './seasonal-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadBrazilKeywordPage />;
}
