import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-market');
}

export default function NoxiousotMarketKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-market" />;
}
