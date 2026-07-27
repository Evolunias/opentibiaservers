import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-history');
}

export default function JameraHistoryKeywordPage() {
  return <StaticKeywordPage slug="jamera-history" />;
}
