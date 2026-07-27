import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion');
}

export default function FreshStartBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion" />;
}
