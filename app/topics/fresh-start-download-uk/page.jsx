import FreshStartDownloadUkKeywordPage, { generateMetadata } from './fresh-start-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadUkKeywordPage />;
}
