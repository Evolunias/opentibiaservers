import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-usa');
}

export default function EvoluniaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-usa" />;
}
