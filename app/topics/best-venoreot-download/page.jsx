import BestVenoreotDownloadKeywordPage, { generateMetadata } from './best-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotDownloadKeywordPage />;
}
