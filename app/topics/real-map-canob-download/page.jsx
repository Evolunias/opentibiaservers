import RealMapCanobDownloadKeywordPage, { generateMetadata } from './real-map-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobDownloadKeywordPage />;
}
