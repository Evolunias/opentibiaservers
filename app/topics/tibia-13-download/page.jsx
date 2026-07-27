import Tibia13DownloadKeywordPage, { generateMetadata } from './tibia-13-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13DownloadKeywordPage />;
}
