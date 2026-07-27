import PvpEnforcedStatusCanadaKeywordPage, { generateMetadata } from './pvp-enforced-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusCanadaKeywordPage />;
}
