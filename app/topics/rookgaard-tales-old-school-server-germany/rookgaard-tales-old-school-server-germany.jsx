import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-germany');
}

export default function RookgaardTalesOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-germany" />;
}
