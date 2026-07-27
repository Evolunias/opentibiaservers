import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-europe');
}

export default function EvoluniaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-europe" />;
}
