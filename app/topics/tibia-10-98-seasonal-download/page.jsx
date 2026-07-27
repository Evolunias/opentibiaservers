import Tibia1098SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalDownloadKeywordPage />;
}
