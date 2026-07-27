import HighExpDownloadUkKeywordPage, { generateMetadata } from './high-exp-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDownloadUkKeywordPage />;
}
