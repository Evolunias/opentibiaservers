import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-non-pvp');
}

export default function TibiaPrivateServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-non-pvp" />;
}
