import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-tibia-private-server');
}

export default function Tibia12RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-tibia-private-server" />;
}
