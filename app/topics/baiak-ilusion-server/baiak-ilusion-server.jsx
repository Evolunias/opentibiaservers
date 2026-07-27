import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-server');
}

export default function BaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-server" />;
}
