import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-chile-server');
}

export default function BaiakIlusionChileServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-chile-server" />;
}
