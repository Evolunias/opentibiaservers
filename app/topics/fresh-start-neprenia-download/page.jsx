import FreshStartNepreniaDownloadKeywordPage, { generateMetadata } from './fresh-start-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaDownloadKeywordPage />;
}
