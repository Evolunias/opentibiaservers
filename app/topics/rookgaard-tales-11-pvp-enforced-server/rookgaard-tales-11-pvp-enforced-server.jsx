import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-pvp-enforced-server');
}

export default function RookgaardTales11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-pvp-enforced-server" />;
}
