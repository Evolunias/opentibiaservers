import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-usa');
}

export default function BaiakIlusionRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-usa" />;
}
