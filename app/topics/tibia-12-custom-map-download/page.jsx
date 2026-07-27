import Tibia12CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-12-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapDownloadKeywordPage />;
}
