import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-south-america');
}

export default function RookgaardTalesPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-south-america" />;
}
