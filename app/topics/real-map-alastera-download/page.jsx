import RealMapAlasteraDownloadKeywordPage, { generateMetadata } from './real-map-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraDownloadKeywordPage />;
}
