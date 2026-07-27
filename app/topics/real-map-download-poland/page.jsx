import RealMapDownloadPolandKeywordPage, { generateMetadata } from './real-map-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadPolandKeywordPage />;
}
