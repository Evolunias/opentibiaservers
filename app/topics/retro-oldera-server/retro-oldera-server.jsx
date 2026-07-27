import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-oldera-server');
}

export default function RetroOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-oldera-server" />;
}
