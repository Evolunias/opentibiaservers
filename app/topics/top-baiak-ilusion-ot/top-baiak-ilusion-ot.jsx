import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-ot');
}

export default function TopBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-ot" />;
}
