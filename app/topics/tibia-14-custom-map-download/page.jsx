import Tibia14CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-14-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapDownloadKeywordPage />;
}
