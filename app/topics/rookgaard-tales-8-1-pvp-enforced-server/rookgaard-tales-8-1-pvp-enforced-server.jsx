import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-pvp-enforced-server');
}

export default function RookgaardTales81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-pvp-enforced-server" />;
}
