import Tibia84CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapDownloadKeywordPage />;
}
