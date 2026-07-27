import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-north-america');
}

export default function RookgaardTalesPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-north-america" />;
}
