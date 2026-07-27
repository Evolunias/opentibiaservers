import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-uk');
}

export default function EvoluniaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-uk" />;
}
