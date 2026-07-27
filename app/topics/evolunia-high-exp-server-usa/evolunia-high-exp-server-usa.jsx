import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-usa');
}

export default function EvoluniaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-usa" />;
}
