import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-server');
}

export default function RookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-server" />;
}
