import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-poland');
}

export default function RookgaardTalesPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-poland" />;
}
