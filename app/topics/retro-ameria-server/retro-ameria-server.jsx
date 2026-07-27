import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ameria-server');
}

export default function RetroAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-ameria-server" />;
}
