import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-history');
}

export default function MorganaHistoryKeywordPage() {
  return <StaticKeywordPage slug="morgana-history" />;
}
