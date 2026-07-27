import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-north-america');
}

export default function RookgaardTalesOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-north-america" />;
}
