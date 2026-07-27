import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-south-america');
}

export default function PvpEnforcedTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-south-america" />;
}
