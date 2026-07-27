import RealMapDownloadNorthAmericaKeywordPage, { generateMetadata } from './real-map-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadNorthAmericaKeywordPage />;
}
