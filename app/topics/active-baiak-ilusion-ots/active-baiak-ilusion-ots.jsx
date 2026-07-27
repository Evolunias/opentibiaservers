import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-ots');
}

export default function ActiveBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-ots" />;
}
