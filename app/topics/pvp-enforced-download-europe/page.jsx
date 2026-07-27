import PvpEnforcedDownloadEuropeKeywordPage, { generateMetadata } from './pvp-enforced-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDownloadEuropeKeywordPage />;
}
