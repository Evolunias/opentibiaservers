import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-latin-america');
}

export default function BaiakIlusionRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-latin-america" />;
}
