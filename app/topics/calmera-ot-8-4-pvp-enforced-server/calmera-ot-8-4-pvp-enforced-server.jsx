import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-pvp-enforced-server');
}

export default function CalmeraOt84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-pvp-enforced-server" />;
}
