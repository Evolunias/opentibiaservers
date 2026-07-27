import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera');
}

export default function EvoleraKeywordPage() {
  return <StaticKeywordPage slug="evolera" />;
}
