import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-ots');
}

export default function BestUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="best-unline-ots" />;
}
