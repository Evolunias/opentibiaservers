import BestTibiantisDownloadKeywordPage, { generateMetadata } from './best-tibiantis-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisDownloadKeywordPage />;
}
