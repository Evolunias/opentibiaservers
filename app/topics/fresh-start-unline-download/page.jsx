import FreshStartUnlineDownloadKeywordPage, { generateMetadata } from './fresh-start-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineDownloadKeywordPage />;
}
