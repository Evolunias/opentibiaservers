import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-france');
}

export default function RookgaardTalesNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-france" />;
}
