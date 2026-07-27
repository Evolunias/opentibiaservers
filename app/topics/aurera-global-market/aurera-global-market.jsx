import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-market');
}

export default function AureraGlobalMarketKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-market" />;
}
