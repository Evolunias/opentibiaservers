import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-oxygenot-server');
}

export default function RetroOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-oxygenot-server" />;
}
