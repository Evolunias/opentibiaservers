import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-france');
}

export default function PvpOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-france" />;
}
