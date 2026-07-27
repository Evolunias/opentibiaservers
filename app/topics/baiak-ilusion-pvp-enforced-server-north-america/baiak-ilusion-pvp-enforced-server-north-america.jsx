import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-enforced-server-north-america');
}

export default function BaiakIlusionPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-enforced-server-north-america" />;
}
