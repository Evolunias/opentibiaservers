import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-france');
}

export default function BaiakIlusionRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-france" />;
}
