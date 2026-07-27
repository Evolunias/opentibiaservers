import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-france');
}

export default function RetroTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-france" />;
}
