import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-pvp-enforced-server');
}

export default function RookgaardTales84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-pvp-enforced-server" />;
}
