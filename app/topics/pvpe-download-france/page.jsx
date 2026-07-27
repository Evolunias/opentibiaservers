import PvpeDownloadFranceKeywordPage, { generateMetadata } from './pvpe-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadFranceKeywordPage />;
}
