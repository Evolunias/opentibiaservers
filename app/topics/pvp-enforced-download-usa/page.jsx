import PvpEnforcedDownloadUsaKeywordPage, { generateMetadata } from './pvp-enforced-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDownloadUsaKeywordPage />;
}
