import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-canada');
}

export default function RookgaardTalesOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-canada" />;
}
