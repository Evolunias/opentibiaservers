import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-pvp-enforced-server');
}

export default function RookgaardTales100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-pvp-enforced-server" />;
}
