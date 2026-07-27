import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-ots');
}

export default function FreshStartBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-ots" />;
}
