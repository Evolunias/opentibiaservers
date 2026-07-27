import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-ot-server');
}

export default function FreshStartBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-ot-server" />;
}
