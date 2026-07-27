import Tibia86ServerDownloadKeywordPage, { generateMetadata } from './tibia-8-6-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerDownloadKeywordPage />;
}
