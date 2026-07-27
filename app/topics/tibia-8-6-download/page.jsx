import Tibia86DownloadKeywordPage, { generateMetadata } from './tibia-8-6-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86DownloadKeywordPage />;
}
