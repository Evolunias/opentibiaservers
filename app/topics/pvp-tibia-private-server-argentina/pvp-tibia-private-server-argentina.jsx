import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-argentina');
}

export default function PvpTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-argentina" />;
}
