import Tibia84DownloadKeywordPage, { generateMetadata } from './tibia-8-4-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84DownloadKeywordPage />;
}
