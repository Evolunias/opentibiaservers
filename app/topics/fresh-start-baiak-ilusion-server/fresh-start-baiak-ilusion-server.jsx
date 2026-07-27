import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-server');
}

export default function FreshStartBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-server" />;
}
