import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera');
}

export default function BestEvoleraKeywordPage() {
  return <StaticKeywordPage slug="best-evolera" />;
}
