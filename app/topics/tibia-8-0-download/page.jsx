import Tibia80DownloadKeywordPage, { generateMetadata } from './tibia-8-0-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80DownloadKeywordPage />;
}
