import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-usa');
}

export default function PvpEnforcedTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-usa" />;
}
