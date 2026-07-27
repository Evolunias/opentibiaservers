import PvpeDownloadCanadaKeywordPage, { generateMetadata } from './pvpe-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadCanadaKeywordPage />;
}
