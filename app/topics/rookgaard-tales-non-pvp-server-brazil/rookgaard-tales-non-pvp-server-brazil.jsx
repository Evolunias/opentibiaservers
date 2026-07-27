import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-brazil');
}

export default function RookgaardTalesNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-brazil" />;
}
