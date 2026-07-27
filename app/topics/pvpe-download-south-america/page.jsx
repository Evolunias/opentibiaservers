import PvpeDownloadSouthAmericaKeywordPage, { generateMetadata } from './pvpe-download-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadSouthAmericaKeywordPage />;
}
