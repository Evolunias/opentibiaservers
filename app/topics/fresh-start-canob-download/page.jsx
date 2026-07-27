import FreshStartCanobDownloadKeywordPage, { generateMetadata } from './fresh-start-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobDownloadKeywordPage />;
}
