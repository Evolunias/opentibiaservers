import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-active-players-tibia-private-server');
}

export default function Tibia81WithActivePlayersTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-active-players-tibia-private-server" />;
}
