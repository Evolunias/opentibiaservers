import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-europe-server');
}

export default function RookgaardTalesEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-europe-server" />;
}
