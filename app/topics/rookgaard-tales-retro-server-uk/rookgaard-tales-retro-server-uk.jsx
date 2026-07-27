import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-uk');
}

export default function RookgaardTalesRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-uk" />;
}
