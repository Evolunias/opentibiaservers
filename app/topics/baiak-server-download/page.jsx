import BaiakServerDownloadKeywordPage, { generateMetadata } from './baiak-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerDownloadKeywordPage />;
}
