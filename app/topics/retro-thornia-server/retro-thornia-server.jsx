import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-thornia-server');
}

export default function RetroThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-thornia-server" />;
}
