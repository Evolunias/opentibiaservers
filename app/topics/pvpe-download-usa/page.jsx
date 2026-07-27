import PvpeDownloadUsaKeywordPage, { generateMetadata } from './pvpe-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadUsaKeywordPage />;
}
