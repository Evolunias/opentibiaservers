import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-north-america');
}

export default function EvoluniaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-north-america" />;
}
