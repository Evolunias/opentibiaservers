import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-uk');
}

export default function PvpEnforcedOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-uk" />;
}
