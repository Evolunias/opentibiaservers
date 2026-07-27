import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-north-america');
}

export default function RookgaardTalesRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-north-america" />;
}
