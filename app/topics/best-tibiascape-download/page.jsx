import BestTibiascapeDownloadKeywordPage, { generateMetadata } from './best-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeDownloadKeywordPage />;
}
