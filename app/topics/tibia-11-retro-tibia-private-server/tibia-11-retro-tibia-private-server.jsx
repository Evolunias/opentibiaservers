import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-tibia-private-server');
}

export default function Tibia11RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-tibia-private-server" />;
}
