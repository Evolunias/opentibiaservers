import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-history');
}

export default function CelestaHistoryKeywordPage() {
  return <StaticKeywordPage slug="celesta-history" />;
}
