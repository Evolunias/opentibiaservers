import BestTibiaraDownloadKeywordPage, { generateMetadata } from './best-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraDownloadKeywordPage />;
}
