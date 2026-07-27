import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-official');
}

export default function RookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-official" />;
}
