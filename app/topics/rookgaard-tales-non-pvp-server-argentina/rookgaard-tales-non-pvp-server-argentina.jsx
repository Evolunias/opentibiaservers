import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-argentina');
}

export default function RookgaardTalesNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-argentina" />;
}
