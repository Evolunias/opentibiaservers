import PvpEnforcedThaisotServerKeywordPage, { generateMetadata } from './pvp-enforced-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedThaisotServerKeywordPage />;
}
