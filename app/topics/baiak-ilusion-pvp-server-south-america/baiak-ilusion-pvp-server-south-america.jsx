import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-south-america');
}

export default function BaiakIlusionPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-south-america" />;
}
