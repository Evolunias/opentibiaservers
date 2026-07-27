import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-canada');
}

export default function ThaisotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-canada" />;
}
