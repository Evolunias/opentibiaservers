import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-poland');
}

export default function RookgaardTalesOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-poland" />;
}
