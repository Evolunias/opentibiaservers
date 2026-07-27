import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-market');
}

export default function UnlineMarketKeywordPage() {
  return <StaticKeywordPage slug="unline-market" />;
}
