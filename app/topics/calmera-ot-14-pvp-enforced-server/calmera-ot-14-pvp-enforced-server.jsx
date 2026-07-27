import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-pvp-enforced-server');
}

export default function CalmeraOt14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-pvp-enforced-server" />;
}
