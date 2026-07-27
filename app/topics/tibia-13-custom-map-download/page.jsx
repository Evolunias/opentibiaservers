import Tibia13CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-13-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapDownloadKeywordPage />;
}
