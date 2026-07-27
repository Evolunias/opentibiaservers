import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-brazil');
}

export default function EvoluniaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-brazil" />;
}
