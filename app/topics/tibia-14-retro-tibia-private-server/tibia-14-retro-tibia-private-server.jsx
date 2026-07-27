import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-tibia-private-server');
}

export default function Tibia14RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-tibia-private-server" />;
}
