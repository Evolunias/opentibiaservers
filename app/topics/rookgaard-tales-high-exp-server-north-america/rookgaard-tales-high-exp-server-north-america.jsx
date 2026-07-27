import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-north-america');
}

export default function RookgaardTalesHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-north-america" />;
}
