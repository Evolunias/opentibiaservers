import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-south-america-server');
}

export default function RookgaardTalesSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-south-america-server" />;
}
