import Tibia772DownloadKeywordPage, { generateMetadata } from './tibia-7-72-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772DownloadKeywordPage />;
}
