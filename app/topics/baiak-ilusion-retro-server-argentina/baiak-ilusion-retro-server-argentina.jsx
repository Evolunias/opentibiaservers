import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-argentina');
}

export default function BaiakIlusionRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-argentina" />;
}
