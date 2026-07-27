import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-pvp-server');
}

export default function RookgaardTales80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-pvp-server" />;
}
