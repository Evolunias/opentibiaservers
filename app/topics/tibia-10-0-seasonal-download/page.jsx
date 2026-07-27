import Tibia100SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalDownloadKeywordPage />;
}
