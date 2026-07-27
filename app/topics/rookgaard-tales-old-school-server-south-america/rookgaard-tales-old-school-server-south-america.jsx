import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-south-america');
}

export default function RookgaardTalesOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-south-america" />;
}
