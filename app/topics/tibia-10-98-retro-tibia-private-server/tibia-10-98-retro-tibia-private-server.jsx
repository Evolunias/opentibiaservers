import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-tibia-private-server');
}

export default function Tibia1098RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-tibia-private-server" />;
}
