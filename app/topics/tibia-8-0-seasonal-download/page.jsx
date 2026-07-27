import Tibia80SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalDownloadKeywordPage />;
}
