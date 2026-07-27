import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-4-old-school-server');
}

export default function RookgaardTales74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-4-old-school-server" />;
}
