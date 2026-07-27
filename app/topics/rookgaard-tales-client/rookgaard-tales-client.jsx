import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-client');
}

export default function RookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-client" />;
}
