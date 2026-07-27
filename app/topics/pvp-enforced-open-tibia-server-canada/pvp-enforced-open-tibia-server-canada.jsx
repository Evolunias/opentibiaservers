import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-canada');
}

export default function PvpEnforcedOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-canada" />;
}
