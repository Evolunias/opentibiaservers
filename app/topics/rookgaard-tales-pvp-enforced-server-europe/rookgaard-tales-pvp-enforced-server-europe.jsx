import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-europe');
}

export default function RookgaardTalesPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-europe" />;
}
