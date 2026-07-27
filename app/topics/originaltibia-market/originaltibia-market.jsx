import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-market');
}

export default function OriginaltibiaMarketKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-market" />;
}
