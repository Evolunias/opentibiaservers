import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-low-exp-server-france');
}

export default function RookgaardTalesLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-low-exp-server-france" />;
}
