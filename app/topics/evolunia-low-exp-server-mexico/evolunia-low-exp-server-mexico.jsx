import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-mexico');
}

export default function EvoluniaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-mexico" />;
}
