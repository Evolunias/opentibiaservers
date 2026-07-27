import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-usa');
}

export default function RookgaardTalesNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-usa" />;
}
