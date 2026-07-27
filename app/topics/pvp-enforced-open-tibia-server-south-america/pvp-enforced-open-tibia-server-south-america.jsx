import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-south-america');
}

export default function PvpEnforcedOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-south-america" />;
}
