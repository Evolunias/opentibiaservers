import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-poland');
}

export default function ThaisotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-poland" />;
}
