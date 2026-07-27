import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-uk');
}

export default function RookgaardTalesNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-uk" />;
}
