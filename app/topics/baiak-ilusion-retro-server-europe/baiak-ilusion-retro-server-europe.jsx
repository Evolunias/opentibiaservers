import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-europe');
}

export default function BaiakIlusionRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-europe" />;
}
