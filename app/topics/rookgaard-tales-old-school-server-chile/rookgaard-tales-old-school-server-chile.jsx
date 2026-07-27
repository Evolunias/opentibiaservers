import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-chile');
}

export default function RookgaardTalesOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-chile" />;
}
