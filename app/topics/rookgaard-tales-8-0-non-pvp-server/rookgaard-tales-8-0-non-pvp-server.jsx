import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-non-pvp-server');
}

export default function RookgaardTales80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-non-pvp-server" />;
}
