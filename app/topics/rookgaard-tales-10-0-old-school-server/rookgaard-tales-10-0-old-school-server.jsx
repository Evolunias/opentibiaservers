import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-old-school-server');
}

export default function RookgaardTales100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-old-school-server" />;
}
