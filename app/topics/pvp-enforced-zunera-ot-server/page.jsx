import PvpEnforcedZuneraOtServerKeywordPage, { generateMetadata } from './pvp-enforced-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedZuneraOtServerKeywordPage />;
}
