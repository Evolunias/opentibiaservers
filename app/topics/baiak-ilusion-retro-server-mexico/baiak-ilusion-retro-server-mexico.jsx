import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-mexico');
}

export default function BaiakIlusionRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-mexico" />;
}
