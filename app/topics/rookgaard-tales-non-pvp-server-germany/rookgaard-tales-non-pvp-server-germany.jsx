import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-germany');
}

export default function RookgaardTalesNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-germany" />;
}
