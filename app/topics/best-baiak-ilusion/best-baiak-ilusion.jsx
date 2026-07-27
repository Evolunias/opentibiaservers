import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion');
}

export default function BestBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion" />;
}
