import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-uk');
}

export default function PvpEnforcedTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-uk" />;
}
