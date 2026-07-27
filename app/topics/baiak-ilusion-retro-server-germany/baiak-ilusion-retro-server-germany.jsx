import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-germany');
}

export default function BaiakIlusionRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-germany" />;
}
