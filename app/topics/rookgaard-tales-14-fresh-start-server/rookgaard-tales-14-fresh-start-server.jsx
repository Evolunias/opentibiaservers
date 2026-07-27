import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-fresh-start-server');
}

export default function RookgaardTales14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-fresh-start-server" />;
}
