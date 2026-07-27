import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-germany');
}

export default function EvoluniaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-germany" />;
}
