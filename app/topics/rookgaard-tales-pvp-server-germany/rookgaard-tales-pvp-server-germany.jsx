import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-germany');
}

export default function RookgaardTalesPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-germany" />;
}
