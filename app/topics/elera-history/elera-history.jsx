import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-history');
}

export default function EleraHistoryKeywordPage() {
  return <StaticKeywordPage slug="elera-history" />;
}
