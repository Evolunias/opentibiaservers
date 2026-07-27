import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-canada');
}

export default function EvoluniaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-canada" />;
}
