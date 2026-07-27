import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-non-pvp-server');
}

export default function RookgaardTales13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-non-pvp-server" />;
}
