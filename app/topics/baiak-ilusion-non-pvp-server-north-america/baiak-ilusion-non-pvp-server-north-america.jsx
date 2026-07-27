import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-north-america');
}

export default function BaiakIlusionNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-north-america" />;
}
