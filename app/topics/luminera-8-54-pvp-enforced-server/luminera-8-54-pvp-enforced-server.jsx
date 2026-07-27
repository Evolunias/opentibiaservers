import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-pvp-enforced-server');
}

export default function Luminera854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-pvp-enforced-server" />;
}
