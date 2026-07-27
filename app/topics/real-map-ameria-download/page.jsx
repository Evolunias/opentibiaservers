import RealMapAmeriaDownloadKeywordPage, { generateMetadata } from './real-map-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaDownloadKeywordPage />;
}
