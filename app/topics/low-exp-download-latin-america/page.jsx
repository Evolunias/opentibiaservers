import LowExpDownloadLatinAmericaKeywordPage, { generateMetadata } from './low-exp-download-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadLatinAmericaKeywordPage />;
}
