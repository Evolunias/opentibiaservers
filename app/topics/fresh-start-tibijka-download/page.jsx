import FreshStartTibijkaDownloadKeywordPage, { generateMetadata } from './fresh-start-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaDownloadKeywordPage />;
}
