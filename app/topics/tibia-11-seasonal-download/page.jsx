import Tibia11SeasonalDownloadKeywordPage, { generateMetadata } from './tibia-11-seasonal-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalDownloadKeywordPage />;
}
