import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-pvp-enforced-server');
}

export default function Tibianus11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-pvp-enforced-server" />;
}
