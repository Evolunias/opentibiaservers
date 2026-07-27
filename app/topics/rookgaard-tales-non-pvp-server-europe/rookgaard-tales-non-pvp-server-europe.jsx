import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-europe');
}

export default function RookgaardTalesNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-europe" />;
}
