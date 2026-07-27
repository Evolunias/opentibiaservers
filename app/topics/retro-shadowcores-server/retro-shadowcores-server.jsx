import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-shadowcores-server');
}

export default function RetroShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="retro-shadowcores-server" />;
}
