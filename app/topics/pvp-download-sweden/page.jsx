import PvpDownloadSwedenKeywordPage, { generateMetadata } from './pvp-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadSwedenKeywordPage />;
}
