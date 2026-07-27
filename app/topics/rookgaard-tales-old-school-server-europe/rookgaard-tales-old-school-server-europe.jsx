import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-europe');
}

export default function RookgaardTalesOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-europe" />;
}
