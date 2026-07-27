import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-tibia-private-server');
}

export default function Tibia96RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-tibia-private-server" />;
}
