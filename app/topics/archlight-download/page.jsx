import ArchlightDownloadKeywordPage, { generateMetadata } from './archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightDownloadKeywordPage />;
}
