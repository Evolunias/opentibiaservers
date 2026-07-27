import LowrateVenoreotDownloadKeywordPage, { generateMetadata } from './lowrate-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotDownloadKeywordPage />;
}
