import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-history');
}

export default function RuberaHistoryKeywordPage() {
  return <StaticKeywordPage slug="rubera-history" />;
}
