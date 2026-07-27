import Tibia15DownloadKeywordPage, { generateMetadata } from './tibia-15-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15DownloadKeywordPage />;
}
