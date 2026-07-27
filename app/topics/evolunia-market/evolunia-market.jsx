import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-market');
}

export default function EvoluniaMarketKeywordPage() {
  return <StaticKeywordPage slug="evolunia-market" />;
}
