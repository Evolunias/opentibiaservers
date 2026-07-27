import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-mexico');
}

export default function RookgaardTalesPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-mexico" />;
}
