import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-south-america');
}

export default function RookgaardTalesNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-south-america" />;
}
