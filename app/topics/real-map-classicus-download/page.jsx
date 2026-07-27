import RealMapClassicusDownloadKeywordPage, { generateMetadata } from './real-map-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusDownloadKeywordPage />;
}
