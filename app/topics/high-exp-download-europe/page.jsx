import HighExpDownloadEuropeKeywordPage, { generateMetadata } from './high-exp-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDownloadEuropeKeywordPage />;
}
