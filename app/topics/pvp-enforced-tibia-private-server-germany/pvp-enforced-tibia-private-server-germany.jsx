import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-germany');
}

export default function PvpEnforcedTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-germany" />;
}
