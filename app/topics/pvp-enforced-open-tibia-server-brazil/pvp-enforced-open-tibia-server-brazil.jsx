import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-brazil');
}

export default function PvpEnforcedOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-brazil" />;
}
