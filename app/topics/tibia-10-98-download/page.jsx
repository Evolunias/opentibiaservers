import Tibia1098DownloadKeywordPage, { generateMetadata } from './tibia-10-98-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098DownloadKeywordPage />;
}
