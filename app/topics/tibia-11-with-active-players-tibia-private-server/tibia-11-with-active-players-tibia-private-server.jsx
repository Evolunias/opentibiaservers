import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-tibia-private-server');
}

export default function Tibia11WithActivePlayersTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-tibia-private-server" />;
}
