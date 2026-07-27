import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-pvp-enforced-server');
}

export default function BaiakIlusion14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-pvp-enforced-server" />;
}
