import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-ots');
}

export default function CustomBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-ots" />;
}
