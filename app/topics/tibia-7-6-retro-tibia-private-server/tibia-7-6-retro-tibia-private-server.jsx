import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-tibia-private-server');
}

export default function Tibia76RetroTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-tibia-private-server" />;
}
