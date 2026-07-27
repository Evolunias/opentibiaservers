import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-pvp-enforced-server');
}

export default function RookgaardTales96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-pvp-enforced-server" />;
}
