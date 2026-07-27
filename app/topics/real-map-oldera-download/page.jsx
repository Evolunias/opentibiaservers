import RealMapOlderaDownloadKeywordPage, { generateMetadata } from './real-map-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaDownloadKeywordPage />;
}
