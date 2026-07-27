import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-brazil');
}

export default function EvoluniaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-brazil" />;
}
