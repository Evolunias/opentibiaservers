import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-brazil');
}

export default function BaiakIlusionPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-brazil" />;
}
