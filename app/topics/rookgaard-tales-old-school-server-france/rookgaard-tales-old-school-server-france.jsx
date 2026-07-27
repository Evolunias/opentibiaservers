import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-france');
}

export default function RookgaardTalesOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-france" />;
}
