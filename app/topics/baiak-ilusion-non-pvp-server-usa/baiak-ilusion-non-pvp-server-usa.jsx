import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-usa');
}

export default function BaiakIlusionNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-usa" />;
}
