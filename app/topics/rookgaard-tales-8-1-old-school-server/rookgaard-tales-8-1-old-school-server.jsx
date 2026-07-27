import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-old-school-server');
}

export default function RookgaardTales81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-old-school-server" />;
}
