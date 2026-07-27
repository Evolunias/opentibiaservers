import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-pvp-enforced-server');
}

export default function Tibianus854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-pvp-enforced-server" />;
}
