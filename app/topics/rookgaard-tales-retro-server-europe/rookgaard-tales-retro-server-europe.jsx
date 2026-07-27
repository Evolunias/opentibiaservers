import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-europe');
}

export default function RookgaardTalesRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-europe" />;
}
