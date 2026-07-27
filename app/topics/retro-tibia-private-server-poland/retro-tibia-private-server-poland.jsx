import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-poland');
}

export default function RetroTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-poland" />;
}
