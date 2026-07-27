import Tibia86CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapDownloadKeywordPage />;
}
