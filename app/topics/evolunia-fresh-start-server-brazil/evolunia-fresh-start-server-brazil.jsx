import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-brazil');
}

export default function EvoluniaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-brazil" />;
}
