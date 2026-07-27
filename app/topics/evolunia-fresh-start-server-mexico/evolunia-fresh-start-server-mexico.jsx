import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-mexico');
}

export default function EvoluniaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-mexico" />;
}
