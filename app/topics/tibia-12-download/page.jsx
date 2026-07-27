import Tibia12DownloadKeywordPage, { generateMetadata } from './tibia-12-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12DownloadKeywordPage />;
}
