import RealMapDownloadUsaKeywordPage, { generateMetadata } from './real-map-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadUsaKeywordPage />;
}
