import Tibia84SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalDownloadKeywordPage />;
}
