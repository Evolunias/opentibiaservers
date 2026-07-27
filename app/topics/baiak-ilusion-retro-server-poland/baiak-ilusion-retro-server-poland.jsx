import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-poland');
}

export default function BaiakIlusionRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-poland" />;
}
