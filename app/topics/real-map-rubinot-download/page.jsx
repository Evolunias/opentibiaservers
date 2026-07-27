import RealMapRubinotDownloadKeywordPage, { generateMetadata } from './real-map-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotDownloadKeywordPage />;
}
