import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-usa');
}

export default function ThaisotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-usa" />;
}
