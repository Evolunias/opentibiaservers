import FreshStartDownloadPolandKeywordPage, { generateMetadata } from './fresh-start-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadPolandKeywordPage />;
}
