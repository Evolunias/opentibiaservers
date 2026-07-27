import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-europe');
}

export default function ThaisotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-europe" />;
}
