import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-brazil');
}

export default function RookgaardTalesRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-brazil" />;
}
