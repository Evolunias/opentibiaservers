import RealMapNepreniaDownloadKeywordPage, { generateMetadata } from './real-map-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaDownloadKeywordPage />;
}
