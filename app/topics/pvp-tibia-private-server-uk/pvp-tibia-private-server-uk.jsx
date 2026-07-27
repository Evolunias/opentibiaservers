import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-uk');
}

export default function PvpTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-uk" />;
}
