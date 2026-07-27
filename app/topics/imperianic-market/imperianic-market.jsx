import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-market');
}

export default function ImperianicMarketKeywordPage() {
  return <StaticKeywordPage slug="imperianic-market" />;
}
