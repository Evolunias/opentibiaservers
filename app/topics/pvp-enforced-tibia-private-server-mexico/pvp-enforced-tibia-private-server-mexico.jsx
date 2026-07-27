import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-mexico');
}

export default function PvpEnforcedTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-mexico" />;
}
