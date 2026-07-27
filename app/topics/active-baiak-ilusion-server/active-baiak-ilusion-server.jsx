import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-server');
}

export default function ActiveBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-server" />;
}
