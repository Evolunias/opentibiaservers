import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-enforced-server-europe');
}

export default function BaiakIlusionPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-enforced-server-europe" />;
}
