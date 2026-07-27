import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-rookgaard-tales-server');
}

export default function RetroRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="retro-rookgaard-tales-server" />;
}
