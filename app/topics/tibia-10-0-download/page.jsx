import Tibia100DownloadKeywordPage, { generateMetadata } from './tibia-10-0-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100DownloadKeywordPage />;
}
