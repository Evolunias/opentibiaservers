import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-uk');
}

export default function BaiakIlusionRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-uk" />;
}
