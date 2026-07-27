import Tibia74CustomMapDownloadKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapDownloadKeywordPage />;
}
