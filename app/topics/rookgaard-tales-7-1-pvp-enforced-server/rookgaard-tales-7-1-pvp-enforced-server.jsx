import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-pvp-enforced-server');
}

export default function RookgaardTales71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-pvp-enforced-server" />;
}
