import RealMapLumineraDownloadKeywordPage, { generateMetadata } from './real-map-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraDownloadKeywordPage />;
}
