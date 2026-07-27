import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-98-old-school-server');
}

export default function RookgaardTales1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-98-old-school-server" />;
}
