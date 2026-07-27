import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-uk');
}

export default function RookgaardTalesPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-uk" />;
}
