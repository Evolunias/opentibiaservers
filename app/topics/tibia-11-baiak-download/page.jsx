import Tibia11BaiakDownloadKeywordPage, { generateMetadata } from './tibia-11-baiak-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakDownloadKeywordPage />;
}
