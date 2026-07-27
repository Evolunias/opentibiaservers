import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-mexico');
}

export default function PvpTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-mexico" />;
}
