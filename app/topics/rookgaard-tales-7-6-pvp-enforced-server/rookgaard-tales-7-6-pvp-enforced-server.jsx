import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-6-pvp-enforced-server');
}

export default function RookgaardTales76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-6-pvp-enforced-server" />;
}
