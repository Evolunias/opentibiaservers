import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-reset');
}

export default function EvoleraResetKeywordPage() {
  return <StaticKeywordPage slug="evolera-reset" />;
}
