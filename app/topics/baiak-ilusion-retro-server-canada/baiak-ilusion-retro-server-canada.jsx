import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-canada');
}

export default function BaiakIlusionRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-canada" />;
}
