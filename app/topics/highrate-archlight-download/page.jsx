import HighrateArchlightDownloadKeywordPage, { generateMetadata } from './highrate-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightDownloadKeywordPage />;
}
