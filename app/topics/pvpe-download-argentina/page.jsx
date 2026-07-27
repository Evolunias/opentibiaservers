import PvpeDownloadArgentinaKeywordPage, { generateMetadata } from './pvpe-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadArgentinaKeywordPage />;
}
