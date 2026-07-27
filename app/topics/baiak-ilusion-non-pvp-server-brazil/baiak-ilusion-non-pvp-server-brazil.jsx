import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-brazil');
}

export default function BaiakIlusionNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-brazil" />;
}
