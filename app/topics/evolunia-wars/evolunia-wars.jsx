import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-wars');
}

export default function EvoluniaWarsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-wars" />;
}
