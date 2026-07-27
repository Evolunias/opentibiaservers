import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-canada');
}

export default function BaiakIlusionPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-canada" />;
}
