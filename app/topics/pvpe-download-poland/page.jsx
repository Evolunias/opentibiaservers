import PvpeDownloadPolandKeywordPage, { generateMetadata } from './pvpe-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadPolandKeywordPage />;
}
