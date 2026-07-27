import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-tibia-private-server');
}

export default function Tibia80RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-tibia-private-server" />;
}
