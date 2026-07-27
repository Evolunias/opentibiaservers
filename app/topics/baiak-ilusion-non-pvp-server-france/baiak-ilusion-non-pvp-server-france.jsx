import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-france');
}

export default function BaiakIlusionNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-france" />;
}
