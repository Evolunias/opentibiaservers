import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-uk');
}

export default function EvoluniaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-uk" />;
}
