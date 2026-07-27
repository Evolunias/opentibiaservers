import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-pvp-enforced-server');
}

export default function Tibianus12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-pvp-enforced-server" />;
}
