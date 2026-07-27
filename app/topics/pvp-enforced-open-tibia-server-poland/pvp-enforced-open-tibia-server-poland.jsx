import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-poland');
}

export default function PvpEnforcedOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-poland" />;
}
