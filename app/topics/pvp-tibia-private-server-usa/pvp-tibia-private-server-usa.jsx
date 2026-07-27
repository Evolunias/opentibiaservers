import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-usa');
}

export default function PvpTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-usa" />;
}
