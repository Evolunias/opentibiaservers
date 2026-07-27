import LowExpDownloadSwedenKeywordPage, { generateMetadata } from './low-exp-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadSwedenKeywordPage />;
}
