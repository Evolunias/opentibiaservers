import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-canada');
}

export default function PvpTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-canada" />;
}
