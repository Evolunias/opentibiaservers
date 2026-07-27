import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-sweden-server');
}

export default function BaiakIlusionSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-sweden-server" />;
}
