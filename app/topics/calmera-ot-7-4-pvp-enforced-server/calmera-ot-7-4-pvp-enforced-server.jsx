import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-4-pvp-enforced-server');
}

export default function CalmeraOt74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-4-pvp-enforced-server" />;
}
