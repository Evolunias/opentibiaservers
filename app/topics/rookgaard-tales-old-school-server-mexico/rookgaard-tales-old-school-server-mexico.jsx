import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-mexico');
}

export default function RookgaardTalesOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-mexico" />;
}
