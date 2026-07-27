import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-canada');
}

export default function PvpEnforcedOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-canada" />;
}
