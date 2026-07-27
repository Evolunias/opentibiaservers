import FreshStartDownloadEuropeKeywordPage, { generateMetadata } from './fresh-start-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadEuropeKeywordPage />;
}
