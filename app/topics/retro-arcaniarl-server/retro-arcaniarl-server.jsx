import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-arcaniarl-server');
}

export default function RetroArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="retro-arcaniarl-server" />;
}
