import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-uk');
}

export default function RookgaardTalesPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-uk" />;
}
