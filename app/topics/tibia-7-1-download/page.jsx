import Tibia71DownloadKeywordPage, { generateMetadata } from './tibia-7-1-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71DownloadKeywordPage />;
}
