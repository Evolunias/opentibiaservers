import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-latin-america');
}

export default function RookgaardTalesPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-latin-america" />;
}
