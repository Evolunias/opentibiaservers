import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-north-america');
}

export default function RookgaardTalesPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-north-america" />;
}
