import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-uk');
}

export default function RetroTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-uk" />;
}
