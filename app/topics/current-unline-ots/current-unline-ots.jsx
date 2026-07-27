import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-ots');
}

export default function CurrentUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="current-unline-ots" />;
}
