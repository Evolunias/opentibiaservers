import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-poland');
}

export default function EvoluniaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-poland" />;
}
