import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-chile-servers');
}

export default function BaiakIlusionChileServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-chile-servers" />;
}
