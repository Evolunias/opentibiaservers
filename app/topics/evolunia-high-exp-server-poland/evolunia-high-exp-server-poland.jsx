import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-poland');
}

export default function EvoluniaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-poland" />;
}
