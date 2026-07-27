import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-canada');
}

export default function EvoluniaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-canada" />;
}
