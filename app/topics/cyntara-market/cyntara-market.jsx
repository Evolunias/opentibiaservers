import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-market');
}

export default function CyntaraMarketKeywordPage() {
  return <StaticKeywordPage slug="cyntara-market" />;
}
