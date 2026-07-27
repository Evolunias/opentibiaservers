import RealMapDownloadUkKeywordPage, { generateMetadata } from './real-map-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadUkKeywordPage />;
}
