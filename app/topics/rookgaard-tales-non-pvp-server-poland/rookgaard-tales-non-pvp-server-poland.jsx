import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-poland');
}

export default function RookgaardTalesNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-poland" />;
}
