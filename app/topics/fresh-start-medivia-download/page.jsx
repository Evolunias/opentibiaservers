import FreshStartMediviaDownloadKeywordPage, { generateMetadata } from './fresh-start-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaDownloadKeywordPage />;
}
