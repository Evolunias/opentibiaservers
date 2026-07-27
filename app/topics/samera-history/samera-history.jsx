import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-history');
}

export default function SameraHistoryKeywordPage() {
  return <StaticKeywordPage slug="samera-history" />;
}
