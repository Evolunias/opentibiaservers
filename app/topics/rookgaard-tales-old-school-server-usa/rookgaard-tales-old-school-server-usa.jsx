import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-usa');
}

export default function RookgaardTalesOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-usa" />;
}
