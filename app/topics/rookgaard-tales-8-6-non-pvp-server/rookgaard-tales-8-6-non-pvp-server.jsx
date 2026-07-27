import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-non-pvp-server');
}

export default function RookgaardTales86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-non-pvp-server" />;
}
