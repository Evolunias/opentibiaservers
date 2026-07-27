import RealMapVenoreotDownloadKeywordPage, { generateMetadata } from './real-map-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotDownloadKeywordPage />;
}
