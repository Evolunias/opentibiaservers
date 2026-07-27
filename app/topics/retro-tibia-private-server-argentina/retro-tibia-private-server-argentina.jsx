import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-argentina');
}

export default function RetroTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-argentina" />;
}
