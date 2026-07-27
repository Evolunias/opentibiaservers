import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-pvp-enforced-server');
}

export default function Tibianus86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-pvp-enforced-server" />;
}
