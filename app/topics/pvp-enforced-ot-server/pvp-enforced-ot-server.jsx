import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server');
}

export default function PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server" />;
}
