import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-germany');
}

export default function RetroTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-germany" />;
}
