import Tibia81DownloadKeywordPage, { generateMetadata } from './tibia-8-1-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81DownloadKeywordPage />;
}
