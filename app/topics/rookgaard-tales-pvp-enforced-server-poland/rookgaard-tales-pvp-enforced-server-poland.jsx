import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-poland');
}

export default function RookgaardTalesPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-poland" />;
}
