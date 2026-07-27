import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-brazil');
}

export default function EvoluniaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-brazil" />;
}
