import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-latin-america');
}

export default function RookgaardTalesRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-latin-america" />;
}
