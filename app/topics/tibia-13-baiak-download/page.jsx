import Tibia13BaiakDownloadKeywordPage, { generateMetadata } from './tibia-13-baiak-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakDownloadKeywordPage />;
}
