import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-pvp');
}

export default function TibiaPrivateServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-pvp" />;
}
