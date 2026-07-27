import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-germany');
}

export default function BaiakIlusionNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-germany" />;
}
