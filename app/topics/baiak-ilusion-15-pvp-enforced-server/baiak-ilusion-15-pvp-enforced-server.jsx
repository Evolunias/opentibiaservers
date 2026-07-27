import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-pvp-enforced-server');
}

export default function BaiakIlusion15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-pvp-enforced-server" />;
}
