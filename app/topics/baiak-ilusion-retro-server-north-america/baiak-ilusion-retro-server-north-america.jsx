import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-north-america');
}

export default function BaiakIlusionRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-north-america" />;
}
