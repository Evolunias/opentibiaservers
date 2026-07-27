import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-enforced-server-germany');
}

export default function CalmeraOtPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-enforced-server-germany" />;
}
