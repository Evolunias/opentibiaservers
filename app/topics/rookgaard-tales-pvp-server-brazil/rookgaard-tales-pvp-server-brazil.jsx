import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-brazil');
}

export default function RookgaardTalesPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-brazil" />;
}
