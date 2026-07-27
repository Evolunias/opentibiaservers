import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-tibia-private-server');
}

export default function Tibia15RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-tibia-private-server" />;
}
