import PvpDownloadSouthAmericaKeywordPage, { generateMetadata } from './pvp-download-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadSouthAmericaKeywordPage />;
}
