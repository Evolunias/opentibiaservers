import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-germany');
}

export default function RookgaardTalesPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-germany" />;
}
