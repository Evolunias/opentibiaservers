import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-europe');
}

export default function PvpEnforcedOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-europe" />;
}
