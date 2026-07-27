import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-mexico');
}

export default function RookgaardTalesNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-mexico" />;
}
