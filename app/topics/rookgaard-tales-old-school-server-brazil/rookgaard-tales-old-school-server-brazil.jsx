import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-brazil');
}

export default function RookgaardTalesOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-brazil" />;
}
