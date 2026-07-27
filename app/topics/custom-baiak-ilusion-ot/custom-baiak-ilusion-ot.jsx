import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-ot');
}

export default function CustomBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-ot" />;
}
