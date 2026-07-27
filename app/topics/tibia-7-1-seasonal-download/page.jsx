import Tibia71SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalDownloadKeywordPage />;
}
