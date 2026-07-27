import RealMapArcaniarlDownloadKeywordPage, { generateMetadata } from './real-map-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlDownloadKeywordPage />;
}
