import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-france');
}

export default function RookgaardTalesHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-france" />;
}
