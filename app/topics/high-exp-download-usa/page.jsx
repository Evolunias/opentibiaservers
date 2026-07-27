import HighExpDownloadUsaKeywordPage, { generateMetadata } from './high-exp-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDownloadUsaKeywordPage />;
}
