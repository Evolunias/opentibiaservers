import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-south-america');
}

export default function RetroTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-south-america" />;
}
