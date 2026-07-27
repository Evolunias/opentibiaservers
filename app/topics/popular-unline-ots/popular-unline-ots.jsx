import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-ots');
}

export default function PopularUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-ots" />;
}
