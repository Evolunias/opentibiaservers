import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-market');
}

export default function InfernalOtMarketKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-market" />;
}
