import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-old-school-server');
}

export default function RookgaardTales11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-old-school-server" />;
}
