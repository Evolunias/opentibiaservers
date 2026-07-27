import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-sweden');
}

export default function PvpEnforcedTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-sweden" />;
}
