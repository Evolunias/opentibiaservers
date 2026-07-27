import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-old-school-server-sweden');
}

export default function RookgaardTalesOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-old-school-server-sweden" />;
}
