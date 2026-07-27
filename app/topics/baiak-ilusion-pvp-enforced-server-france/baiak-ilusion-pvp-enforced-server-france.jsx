import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-enforced-server-france');
}

export default function BaiakIlusionPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-enforced-server-france" />;
}
