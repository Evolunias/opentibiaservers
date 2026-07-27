import RealMapSabrehavenDownloadKeywordPage, { generateMetadata } from './real-map-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenDownloadKeywordPage />;
}
