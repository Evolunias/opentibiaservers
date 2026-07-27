import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-pvp-enforced-server');
}

export default function RookgaardTales12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-pvp-enforced-server" />;
}
