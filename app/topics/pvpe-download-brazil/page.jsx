import PvpeDownloadBrazilKeywordPage, { generateMetadata } from './pvpe-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadBrazilKeywordPage />;
}
