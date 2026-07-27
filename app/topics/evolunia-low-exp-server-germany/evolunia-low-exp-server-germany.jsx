import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-germany');
}

export default function EvoluniaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-germany" />;
}
