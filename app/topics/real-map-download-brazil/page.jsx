import RealMapDownloadBrazilKeywordPage, { generateMetadata } from './real-map-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadBrazilKeywordPage />;
}
