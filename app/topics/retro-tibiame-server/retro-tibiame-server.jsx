import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibiame-server');
}

export default function RetroTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibiame-server" />;
}
