import HighExpDownloadPolandKeywordPage, { generateMetadata } from './high-exp-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDownloadPolandKeywordPage />;
}
