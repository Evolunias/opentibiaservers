import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibiascape-server');
}

export default function RetroTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibiascape-server" />;
}
