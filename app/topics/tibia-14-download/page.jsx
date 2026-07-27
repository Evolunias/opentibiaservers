import Tibia14DownloadKeywordPage, { generateMetadata } from './tibia-14-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14DownloadKeywordPage />;
}
