import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-brazil');
}

export default function ThaisotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-brazil" />;
}
