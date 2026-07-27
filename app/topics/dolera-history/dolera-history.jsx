import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-history');
}

export default function DoleraHistoryKeywordPage() {
  return <StaticKeywordPage slug="dolera-history" />;
}
