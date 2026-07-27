import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-market');
}

export default function ClassicusMarketKeywordPage() {
  return <StaticKeywordPage slug="classicus-market" />;
}
