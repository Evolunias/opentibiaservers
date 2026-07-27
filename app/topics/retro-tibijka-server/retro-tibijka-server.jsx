import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibijka-server');
}

export default function RetroTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibijka-server" />;
}
