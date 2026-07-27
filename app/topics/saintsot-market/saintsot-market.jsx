import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-market');
}

export default function SaintsotMarketKeywordPage() {
  return <StaticKeywordPage slug="saintsot-market" />;
}
