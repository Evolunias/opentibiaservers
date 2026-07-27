import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-pvp');
}

export default function PvpEnforcedOtServerPvpKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-pvp" />;
}
