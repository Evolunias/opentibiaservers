import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-pvp-enforced-server');
}

export default function BaiakIlusion80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-pvp-enforced-server" />;
}
