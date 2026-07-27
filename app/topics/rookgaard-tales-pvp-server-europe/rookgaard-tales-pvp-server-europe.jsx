import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-europe');
}

export default function RookgaardTalesPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-europe" />;
}
