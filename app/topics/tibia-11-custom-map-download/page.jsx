import Tibia11CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-11-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapDownloadKeywordPage />;
}
