import PvpeDownloadEuropeKeywordPage, { generateMetadata } from './pvpe-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadEuropeKeywordPage />;
}
