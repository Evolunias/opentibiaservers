import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-enforced-server-south-america');
}

export default function RookgaardTalesPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-enforced-server-south-america" />;
}
