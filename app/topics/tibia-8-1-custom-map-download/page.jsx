import Tibia81CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapDownloadKeywordPage />;
}
