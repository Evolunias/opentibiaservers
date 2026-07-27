import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-brazil');
}

export default function BaiakIlusionRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-brazil" />;
}
