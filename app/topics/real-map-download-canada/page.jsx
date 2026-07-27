import RealMapDownloadCanadaKeywordPage, { generateMetadata } from './real-map-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadCanadaKeywordPage />;
}
