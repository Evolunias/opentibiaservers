import LowExpDownloadMexicoKeywordPage, { generateMetadata } from './low-exp-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadMexicoKeywordPage />;
}
