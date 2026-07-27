import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-argentina');
}

export default function RookgaardTalesRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-argentina" />;
}
