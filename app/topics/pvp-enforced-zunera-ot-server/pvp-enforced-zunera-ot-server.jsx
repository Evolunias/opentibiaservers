import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-zunera-ot-server');
}

export default function PvpEnforcedZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-zunera-ot-server" />;
}
