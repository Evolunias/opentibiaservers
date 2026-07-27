import RealMapThorniaDownloadKeywordPage, { generateMetadata } from './real-map-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaDownloadKeywordPage />;
}
