import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-europe-servers');
}

export default function RookgaardTalesEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-europe-servers" />;
}
