import Tibia12BaiakDownloadKeywordPage, { generateMetadata } from './tibia-12-baiak-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakDownloadKeywordPage />;
}
