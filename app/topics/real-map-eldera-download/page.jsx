import RealMapElderaDownloadKeywordPage, { generateMetadata } from './real-map-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaDownloadKeywordPage />;
}
