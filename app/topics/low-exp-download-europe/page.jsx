import LowExpDownloadEuropeKeywordPage, { generateMetadata } from './low-exp-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadEuropeKeywordPage />;
}
