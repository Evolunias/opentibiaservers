import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-enforced-server-europe');
}

export default function CalmeraOtPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-enforced-server-europe" />;
}
