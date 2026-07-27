import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-ot');
}

export default function ActiveBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-ot" />;
}
