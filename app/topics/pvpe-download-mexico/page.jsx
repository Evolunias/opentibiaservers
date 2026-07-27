import PvpeDownloadMexicoKeywordPage, { generateMetadata } from './pvpe-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadMexicoKeywordPage />;
}
