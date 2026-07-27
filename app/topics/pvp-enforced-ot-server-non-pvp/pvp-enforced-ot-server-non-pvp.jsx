import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-non-pvp');
}

export default function PvpEnforcedOtServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-non-pvp" />;
}
