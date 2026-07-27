import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-fresh-start-server');
}

export default function RookgaardTales15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-fresh-start-server" />;
}
