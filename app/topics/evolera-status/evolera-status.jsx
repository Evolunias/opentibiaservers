import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-status');
}

export default function EvoleraStatusKeywordPage() {
  return <StaticKeywordPage slug="evolera-status" />;
}
