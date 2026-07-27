import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-pvp-enforced-server');
}

export default function RookgaardTales86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-pvp-enforced-server" />;
}
