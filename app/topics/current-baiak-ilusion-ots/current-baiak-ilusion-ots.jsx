import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-ots');
}

export default function CurrentBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-ots" />;
}
