import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-bosses');
}

export default function RookgaardTalesBossesKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-bosses" />;
}
