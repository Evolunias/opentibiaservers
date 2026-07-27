import RealMapBlazeraDownloadKeywordPage, { generateMetadata } from './real-map-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraDownloadKeywordPage />;
}
