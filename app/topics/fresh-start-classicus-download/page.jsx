import FreshStartClassicusDownloadKeywordPage, { generateMetadata } from './fresh-start-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusDownloadKeywordPage />;
}
