import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-ots');
}

export default function EvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="evolera-ots" />;
}
