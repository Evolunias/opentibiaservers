import FreshStartKasteriaDownloadKeywordPage, { generateMetadata } from './fresh-start-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaDownloadKeywordPage />;
}
