import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-france');
}

export default function PvpEnforcedOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-france" />;
}
