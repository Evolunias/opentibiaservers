import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-xanteria-server');
}

export default function RetroXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-xanteria-server" />;
}
