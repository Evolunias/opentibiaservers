import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-germany');
}

export default function BaiakIlusionPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-germany" />;
}
