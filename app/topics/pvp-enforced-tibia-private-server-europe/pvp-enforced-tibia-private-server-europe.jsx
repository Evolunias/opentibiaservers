import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-europe');
}

export default function PvpEnforcedTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-europe" />;
}
