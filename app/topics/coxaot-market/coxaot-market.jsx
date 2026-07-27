import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-market');
}

export default function CoxaotMarketKeywordPage() {
  return <StaticKeywordPage slug="coxaot-market" />;
}
