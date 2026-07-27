import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-market');
}

export default function NilotMarketKeywordPage() {
  return <StaticKeywordPage slug="nilot-market" />;
}
