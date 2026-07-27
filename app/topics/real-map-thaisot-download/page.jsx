import RealMapThaisotDownloadKeywordPage, { generateMetadata } from './real-map-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotDownloadKeywordPage />;
}
