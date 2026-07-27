import FreshStartDownloadCanadaKeywordPage, { generateMetadata } from './fresh-start-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadCanadaKeywordPage />;
}
