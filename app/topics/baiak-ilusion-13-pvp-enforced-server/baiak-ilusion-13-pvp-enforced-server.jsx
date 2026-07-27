import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-pvp-enforced-server');
}

export default function BaiakIlusion13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-pvp-enforced-server" />;
}
