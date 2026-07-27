import Tibia1098ServerDownloadKeywordPage, { generateMetadata } from './tibia-10-98-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerDownloadKeywordPage />;
}
