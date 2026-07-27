import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-germany-server');
}

export default function BaiakIlusionGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-germany-server" />;
}
