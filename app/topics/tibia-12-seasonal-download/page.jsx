import Tibia12SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-12-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalDownloadKeywordPage />;
}
