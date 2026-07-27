import BestTibiameDownloadKeywordPage, { generateMetadata } from './best-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameDownloadKeywordPage />;
}
