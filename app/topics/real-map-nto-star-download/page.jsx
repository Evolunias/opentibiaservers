import RealMapNtoStarDownloadKeywordPage, { generateMetadata } from './real-map-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarDownloadKeywordPage />;
}
