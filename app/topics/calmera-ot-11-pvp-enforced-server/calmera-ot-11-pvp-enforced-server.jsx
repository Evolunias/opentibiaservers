import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-pvp-enforced-server');
}

export default function CalmeraOt11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-pvp-enforced-server" />;
}
