import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-pvp-enforced-server');
}

export default function CalmeraOt96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-pvp-enforced-server" />;
}
