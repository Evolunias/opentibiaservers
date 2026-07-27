import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-history');
}

export default function ValoriaHistoryKeywordPage() {
  return <StaticKeywordPage slug="valoria-history" />;
}
