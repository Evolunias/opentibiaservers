import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-usa');
}

export default function RookgaardTalesRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-usa" />;
}
