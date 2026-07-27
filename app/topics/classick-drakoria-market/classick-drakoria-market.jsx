import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-market');
}

export default function ClassickDrakoriaMarketKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-market" />;
}
