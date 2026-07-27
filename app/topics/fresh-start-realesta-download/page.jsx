import FreshStartRealestaDownloadKeywordPage, { generateMetadata } from './fresh-start-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaDownloadKeywordPage />;
}
