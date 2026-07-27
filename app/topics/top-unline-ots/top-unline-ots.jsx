import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-ots');
}

export default function TopUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="top-unline-ots" />;
}
