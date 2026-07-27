import LowExpDownloadNorthAmericaKeywordPage, { generateMetadata } from './low-exp-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadNorthAmericaKeywordPage />;
}
