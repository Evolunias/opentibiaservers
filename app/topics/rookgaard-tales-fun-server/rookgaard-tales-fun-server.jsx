import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fun-server');
}

export default function RookgaardTalesFunServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fun-server" />;
}
