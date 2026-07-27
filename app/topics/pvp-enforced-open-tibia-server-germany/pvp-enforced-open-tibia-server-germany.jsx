import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-germany');
}

export default function PvpEnforcedOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-germany" />;
}
