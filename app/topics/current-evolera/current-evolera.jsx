import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera');
}

export default function CurrentEvoleraKeywordPage() {
  return <StaticKeywordPage slug="current-evolera" />;
}
