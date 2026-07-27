import PvpeDownloadNorthAmericaKeywordPage, { generateMetadata } from './pvpe-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadNorthAmericaKeywordPage />;
}
