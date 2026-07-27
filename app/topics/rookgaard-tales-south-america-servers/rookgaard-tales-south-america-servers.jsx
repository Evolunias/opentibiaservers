import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-south-america-servers');
}

export default function RookgaardTalesSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-south-america-servers" />;
}
