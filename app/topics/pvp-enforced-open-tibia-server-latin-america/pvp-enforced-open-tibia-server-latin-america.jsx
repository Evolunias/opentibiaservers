import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-latin-america');
}

export default function PvpEnforcedOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-latin-america" />;
}
