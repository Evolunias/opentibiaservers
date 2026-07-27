import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-latin-america');
}

export default function BaiakIlusionNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-latin-america" />;
}
