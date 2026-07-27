import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-argentina');
}

export default function RookgaardTalesOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-argentina" />;
}
