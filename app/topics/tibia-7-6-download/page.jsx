import Tibia76DownloadKeywordPage, { generateMetadata } from './tibia-7-6-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76DownloadKeywordPage />;
}
