import PvpDownloadGermanyKeywordPage, { generateMetadata } from './pvp-download-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadGermanyKeywordPage />;
}
