import PvpEnforcedDownloadPolandKeywordPage, { generateMetadata } from './pvp-enforced-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDownloadPolandKeywordPage />;
}
