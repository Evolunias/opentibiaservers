import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-mexico');
}

export default function PvpEnforcedOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-mexico" />;
}
