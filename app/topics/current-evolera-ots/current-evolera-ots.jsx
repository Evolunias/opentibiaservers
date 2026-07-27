import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-ots');
}

export default function CurrentEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-ots" />;
}
