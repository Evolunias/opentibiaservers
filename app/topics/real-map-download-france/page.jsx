import RealMapDownloadFranceKeywordPage, { generateMetadata } from './real-map-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadFranceKeywordPage />;
}
