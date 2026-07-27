import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-north-america');
}

export default function PvpEnforcedOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-north-america" />;
}
