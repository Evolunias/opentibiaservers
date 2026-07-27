import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-usa');
}

export default function RetroTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-usa" />;
}
