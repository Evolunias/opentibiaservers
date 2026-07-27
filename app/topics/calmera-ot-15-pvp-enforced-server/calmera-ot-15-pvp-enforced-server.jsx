import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-pvp-enforced-server');
}

export default function CalmeraOt15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-pvp-enforced-server" />;
}
