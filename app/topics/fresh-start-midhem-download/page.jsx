import FreshStartMidhemDownloadKeywordPage, { generateMetadata } from './fresh-start-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemDownloadKeywordPage />;
}
