import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-non-pvp-server');
}

export default function RookgaardTales71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-non-pvp-server" />;
}
