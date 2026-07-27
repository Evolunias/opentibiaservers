import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-uk');
}

export default function ThaisotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-uk" />;
}
