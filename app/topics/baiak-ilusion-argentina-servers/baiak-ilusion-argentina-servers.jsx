import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-argentina-servers');
}

export default function BaiakIlusionArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-argentina-servers" />;
}
