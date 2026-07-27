import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-latin-america');
}

export default function RookgaardTalesOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-latin-america" />;
}
