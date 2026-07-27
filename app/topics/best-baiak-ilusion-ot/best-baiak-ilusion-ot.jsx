import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-ot');
}

export default function BestBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-ot" />;
}
