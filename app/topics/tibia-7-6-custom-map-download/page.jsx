import Tibia76CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapDownloadKeywordPage />;
}
