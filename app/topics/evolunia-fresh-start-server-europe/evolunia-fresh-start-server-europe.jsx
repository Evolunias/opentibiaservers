import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-europe');
}

export default function EvoluniaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-europe" />;
}
