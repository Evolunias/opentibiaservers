import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-mexico');
}

export default function EvoluniaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-mexico" />;
}
