import LowExpDownloadCanadaKeywordPage, { generateMetadata } from './low-exp-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadCanadaKeywordPage />;
}
