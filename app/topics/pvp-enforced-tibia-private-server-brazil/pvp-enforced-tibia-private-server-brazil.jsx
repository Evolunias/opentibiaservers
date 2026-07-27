import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-brazil');
}

export default function PvpEnforcedTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-brazil" />;
}
