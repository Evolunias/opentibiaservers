import Tibia13SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-13-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalDownloadKeywordPage />;
}
