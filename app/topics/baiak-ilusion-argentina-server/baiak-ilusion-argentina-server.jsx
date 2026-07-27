import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-argentina-server');
}

export default function BaiakIlusionArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-argentina-server" />;
}
