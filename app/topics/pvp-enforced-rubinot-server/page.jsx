import PvpEnforcedRubinotServerKeywordPage, { generateMetadata } from './pvp-enforced-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRubinotServerKeywordPage />;
}
