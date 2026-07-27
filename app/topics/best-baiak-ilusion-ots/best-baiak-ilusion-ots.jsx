import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-ots');
}

export default function BestBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-ots" />;
}
