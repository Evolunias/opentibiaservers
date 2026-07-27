import Tibia96CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapDownloadKeywordPage />;
}
