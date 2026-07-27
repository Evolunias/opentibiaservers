import LowExpDownloadUkKeywordPage, { generateMetadata } from './low-exp-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadUkKeywordPage />;
}
