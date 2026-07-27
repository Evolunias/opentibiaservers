import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-map');
}

export default function EvoluniaMapKeywordPage() {
  return <StaticKeywordPage slug="evolunia-map" />;
}
