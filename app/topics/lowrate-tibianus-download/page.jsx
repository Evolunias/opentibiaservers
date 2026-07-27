import LowrateTibianusDownloadKeywordPage, { generateMetadata } from './lowrate-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusDownloadKeywordPage />;
}
