import LowExpDownloadBrazilKeywordPage, { generateMetadata } from './low-exp-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadBrazilKeywordPage />;
}
