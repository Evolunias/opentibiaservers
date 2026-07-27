import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-uk');
}

export default function RookgaardTalesOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-uk" />;
}
