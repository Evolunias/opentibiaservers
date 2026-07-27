import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-argentina');
}

export default function PvpEnforcedTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-argentina" />;
}
