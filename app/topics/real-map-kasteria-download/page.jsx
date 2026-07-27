import RealMapKasteriaDownloadKeywordPage, { generateMetadata } from './real-map-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaDownloadKeywordPage />;
}
