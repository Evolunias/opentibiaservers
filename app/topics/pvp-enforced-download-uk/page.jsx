import PvpEnforcedDownloadUkKeywordPage, { generateMetadata } from './pvp-enforced-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDownloadUkKeywordPage />;
}
