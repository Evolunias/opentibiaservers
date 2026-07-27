import HighrateTibianusDownloadKeywordPage, { generateMetadata } from './highrate-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusDownloadKeywordPage />;
}
