import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-poland');
}

export default function PvpEnforcedTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-poland" />;
}
