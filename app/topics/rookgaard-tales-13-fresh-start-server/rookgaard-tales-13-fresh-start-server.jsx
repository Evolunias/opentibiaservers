import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-fresh-start-server');
}

export default function RookgaardTales13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-fresh-start-server" />;
}
