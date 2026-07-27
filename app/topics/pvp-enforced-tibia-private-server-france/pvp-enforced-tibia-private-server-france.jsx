import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-france');
}

export default function PvpEnforcedTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-france" />;
}
