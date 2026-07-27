import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-active-players-tibia-private-server');
}

export default function Tibia71WithActivePlayersTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-active-players-tibia-private-server" />;
}
