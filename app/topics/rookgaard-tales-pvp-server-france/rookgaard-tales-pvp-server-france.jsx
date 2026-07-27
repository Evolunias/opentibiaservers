import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-france');
}

export default function RookgaardTalesPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-france" />;
}
