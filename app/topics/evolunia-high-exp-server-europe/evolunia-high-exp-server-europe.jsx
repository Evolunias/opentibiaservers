import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-europe');
}

export default function EvoluniaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-europe" />;
}
