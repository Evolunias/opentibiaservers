import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-history');
}

export default function NovaHistoryKeywordPage() {
  return <StaticKeywordPage slug="nova-history" />;
}
