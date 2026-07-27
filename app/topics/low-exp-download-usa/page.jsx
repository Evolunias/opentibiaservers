import LowExpDownloadUsaKeywordPage, { generateMetadata } from './low-exp-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadUsaKeywordPage />;
}
