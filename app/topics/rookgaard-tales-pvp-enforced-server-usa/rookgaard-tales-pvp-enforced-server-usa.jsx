import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-usa');
}

export default function RookgaardTalesPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-usa" />;
}
