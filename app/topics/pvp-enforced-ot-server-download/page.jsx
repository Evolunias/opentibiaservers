import PvpEnforcedOtServerDownloadKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerDownloadKeywordPage />;
}
