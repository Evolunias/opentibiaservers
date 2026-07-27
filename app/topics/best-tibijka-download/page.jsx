import BestTibijkaDownloadKeywordPage, { generateMetadata } from './best-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaDownloadKeywordPage />;
}
