import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-pvp-enforced-server');
}

export default function RookgaardTales15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-pvp-enforced-server" />;
}
