import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-ots');
}

export default function TopBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-ots" />;
}
