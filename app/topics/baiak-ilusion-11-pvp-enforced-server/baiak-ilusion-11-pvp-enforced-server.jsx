import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-pvp-enforced-server');
}

export default function BaiakIlusion11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-pvp-enforced-server" />;
}
