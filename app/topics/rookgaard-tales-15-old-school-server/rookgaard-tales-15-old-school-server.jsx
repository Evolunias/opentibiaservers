import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-old-school-server');
}

export default function RookgaardTales15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-old-school-server" />;
}
