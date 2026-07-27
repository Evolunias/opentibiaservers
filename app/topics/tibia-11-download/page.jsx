import Tibia11DownloadKeywordPage, { generateMetadata } from './tibia-11-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11DownloadKeywordPage />;
}
