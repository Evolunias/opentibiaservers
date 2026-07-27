import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-france');
}

export default function RookgaardTalesPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-france" />;
}
