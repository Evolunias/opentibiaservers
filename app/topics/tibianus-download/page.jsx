import TibianusDownloadKeywordPage, { generateMetadata } from './tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusDownloadKeywordPage />;
}
