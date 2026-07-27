import Tibia76SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalDownloadKeywordPage />;
}
