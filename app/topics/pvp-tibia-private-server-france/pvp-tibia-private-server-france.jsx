import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-france');
}

export default function PvpTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-france" />;
}
