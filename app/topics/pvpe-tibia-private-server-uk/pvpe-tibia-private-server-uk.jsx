import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-uk');
}

export default function PvpeTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-uk" />;
}
